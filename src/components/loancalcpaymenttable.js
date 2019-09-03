import React from 'react'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    <th className="text-center">Location</th>
                    <th className="text-center">Tuition</th>
                    <th className="text-center">Cost of Living</th>
                    <th className="text-center">Max Total</th>
                </tr>
                <tr>
                    <td className="text-center">PROGRAM 1</td>
                    <td className="text-center">$13,495</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$19,495</td>
                </tr>
                <tr>
                    <td className="text-center">PROGRAM 2</td>
                    <td className="text-center">$14,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$20,995</td>
                </tr>
                <tr>
                    <td className="text-center">PROGRAM 3</td>
                    <td className="text-center">$11,995</td>
                    <td className="text-center">$6,000</td>
                    <td className="text-center">$17,995</td>
                </tr>
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center bg-primary text-white rounded">PROGRAM 1</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $13,495</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $19,495</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">PROGRAM 2</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $14,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $20,995</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>PROGRAM 3</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $11,995</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $6,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $17,995</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable