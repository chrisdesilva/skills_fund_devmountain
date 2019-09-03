import React from 'react'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    <th className="text-center">Program</th>
                    <th className="text-center">Tuition</th>
                    <th className="text-center">Cost of Living</th>
                    <th className="text-center">Max Total</th>
                </tr>
                <tr>
                    <td className="text-center">iOS Development Immersive</td>
                    <td className="text-center">$10,450</td>
                    <td className="text-center">$3,000</td>
                    <td className="text-center">$13,450</td>
                </tr>
                <tr>
                    <td className="text-center">Software Quality Assurance</td>
                    <td className="text-center">$7,050</td>
                    <td className="text-center">--</td>
                    <td className="text-center">$7,050</td>
                </tr>
                <tr>
                    <td className="text-center">UX Design</td>
                    <td className="text-center">$10,450</td>
                    <td className="text-center">$3,000</td>
                    <td className="text-center">$13,450</td>
                </tr>
                <tr>
                    <td className="text-center">UX Design After Hours</td>
                    <td className="text-center">$4,300</td>
                    <td className="text-center">--</td>
                    <td className="text-center">$4,300</td>
                </tr>
                <tr>
                    <td className="text-center">Web Development After Hours</td>
                    <td className="text-center">$10,450</td>
                    <td className="text-center">--</td>
                    <td className="text-center">$10,450</td>
                </tr>
                <tr>
                    <td className="text-center">Web Development Immersive</td>
                    <td className="text-center">$11,450</td>
                    <td className="text-center">$3,000</td>
                    <td className="text-center">$14,450</td>
                </tr>
                <tr>
                    <td className="text-center">Web Development Online</td>
                    <td className="text-center">$10,450</td>
                    <td className="text-center">--</td>
                    <td className="text-center">$10,450</td>
                </tr>
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                <tr>
                    <th className="text-center bg-primary text-white rounded">iOS Development Immersive</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $10,450</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $3,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $13,450</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded">Software Quality Assurance</th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $7,050</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: --</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $7,050</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>UX Design</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $10,450</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $3,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $13,450</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>UX Design After Hours</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $4,300</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: --</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $4,300</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>Web Development After Hours</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $10,450</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: --</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $10,450</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>Web Development Immersive</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $11,450</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: $3,000</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $13,450</td>
                </tr>
                <tr>
                    <th className="text-center bg-primary text-white rounded flex flex-col w-64"><span>Web Development Online</span></th>
                </tr>
                <tr>
                    <td className="text-center">Tuition: $10,450</td>
                </tr>
                <tr>
                    <td className="text-center">Cost of Living: --</td>
                </tr>
                <tr>
                    <td className="text-center">Max Total: $10,450</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable