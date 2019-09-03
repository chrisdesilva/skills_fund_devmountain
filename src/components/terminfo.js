import React from 'react'
import GeneralTerms from './generalterms'
import InterestOnlyTerms from './interestonlyterms'
import ImmRepaymentTerms from './immrepaymentterms'

// update with school-specific info
const schoolInfo = {
    interestRate36: 'X.XX%',
    interestRate60: 'XX.XX%',
    APRRange36: 'XX.XX - XX.XX%',
    APRRange60: 'XX.XX - XX.XX%',
    interestOnly: [{
        programName: 'PROGRAM NAME',
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        IOPayment36: '$XX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        IOPayment60: '$XX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
        programLength: 'X' // program length in months
    }],
    immediateRepayment: [{ 
        programName: 'PROGRAM NAME',
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
    }]
}
const multipleLoanLengths = true // true if both 36 and 60 month options are available
const multipleLoanTypes = false // true if both IR and IO are available

const TermInfo = props => (
    <div className="text-center mx-2 lg:mx-10 p-8 shadow rounded">
       <h2 className="py-4 text-center">More Info On Terms</h2>
        <div>
            <GeneralTerms 
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
                interestRate36={schoolInfo.interestRate36}
                interestRate60={schoolInfo.interestRate60}
                IOAPR36={schoolInfo.interestOnly[0].APR36}
                IOAPR60={schoolInfo.interestOnly[0].APR60}
                IRAPR36={schoolInfo.immediateRepayment[0].APR36}
                IRAPR60={schoolInfo.immediateRepayment[0].APR60}
                APRRange36={schoolInfo.APRRange36}
                APRRange60={schoolInfo.APRRange60}
            />

            {schoolInfo.interestOnly.map(school => {
                return <InterestOnlyTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                ioPayment36={school.IOPayment36}
                ioPayment60={school.IOPayment60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                programLength={school.programLength}
                multipleLoanLengths={multipleLoanLengths}
            />
            })}

            {multipleLoanTypes && schoolInfo.immediateRepayment.map(school => {
                return <ImmRepaymentTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                multipleLoanLengths={multipleLoanLengths}
                multipleLoanTypes={multipleLoanTypes}
            />
            })

            }
        </div>
    </div>
)

export default TermInfo