var nSpaceEx;
(function (nSpaceEx) {
    function AnualFeeCal(feeAmt, term) {
        return feeAmt * term;
    }
    nSpaceEx.AnualFeeCal = AnualFeeCal;
})(nSpaceEx || (nSpaceEx = {}));
