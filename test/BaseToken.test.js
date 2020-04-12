const { BN, expectRevert } = require('@openzeppelin/test-helpers');

const { shouldBehaveLikeBaseToken } = require('./token/ERC20/behaviours/BaseToken.behaviour');

const BaseToken = artifacts.require('BaseToken');

contract('BaseToken', function ([owner, anotherAccount, minter, operator, recipient, thirdParty]) {
  const _name = 'BaseToken';
  const _symbol = 'ERC20';
  const _decimals = new BN(18);
  const _cap = new BN(200000000);
  const _initialSupply = new BN(100000000);

  const _builtOn = 'https://vittominacori.github.io/erc20-generator';

  context('creating valid token', function () {
    describe('as a ERC20Capped', function () {
      it('requires a non-zero cap', async function () {
        await expectRevert.unspecified(
          BaseToken.new(_name, _symbol, _decimals, 0, _initialSupply, false, { from: owner }),
        );
      });
    });

    describe('as a BaseToken', function () {
      describe('without initial supply', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(_name, _symbol, _decimals, _cap, 0, false, { from: owner });
        });

        describe('once deployed', function () {
          it('total supply should be equal to zero', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(new BN(0));
          });

          it('owner balance should be equal to zero', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(new BN(0));
          });
        });
      });

      describe('with initial supply', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(_name, _symbol, _decimals, _cap, _initialSupply, false, { from: owner });
        });

        describe('once deployed', function () {
          it('total supply should be equal to initial supply', async function () {
            (await this.token.totalSupply()).should.be.bignumber.equal(_initialSupply);
          });

          it('owner balance should be equal to initial supply', async function () {
            (await this.token.balanceOf(owner)).should.be.bignumber.equal(_initialSupply);
          });
        });
      });

      describe('with transfer enabled during deploy', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(_name, _symbol, _decimals, _cap, _initialSupply, true, { from: owner });
        });

        it('transferEnabled should be true', async function () {
          (await this.token.transferEnabled()).should.be.equal(true);
        });
      });

      describe('with transfer not enabled during deploy', function () {
        beforeEach(async function () {
          this.token = await BaseToken.new(_name, _symbol, _decimals, _cap, _initialSupply, false, { from: owner });
        });

        it('transferEnabled should be false', async function () {
          (await this.token.transferEnabled()).should.be.equal(false);
        });
      });
    });
  });

  context('like a BaseToken', function () {
    beforeEach(async function () {
      this.token = await BaseToken.new(_name, _symbol, _decimals, _cap, _initialSupply, false, { from: owner });
    });

    it('should have a builtOn value', async function () {
      (await this.token.builtOn()).should.be.equal(_builtOn);
    });

    shouldBehaveLikeBaseToken(
      [owner, anotherAccount, minter, operator, recipient, thirdParty],
      [_name, _symbol, _decimals, _cap, _initialSupply],
    );
  });
});
