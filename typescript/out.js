var nSpaceEx;
(function (nSpaceEx) {
    function AnualFeeCal(feeAmt, term) {
        return feeAmt * term;
    }
    nSpaceEx.AnualFeeCal = AnualFeeCal;
})(nSpaceEx || (nSpaceEx = {}));
/// <reference path="./nSpaceEx.ts" />
var calc = nSpaceEx.AnualFeeCal(1000, 4);
console.log(calc);
