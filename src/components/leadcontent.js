import React from 'react'

const LeadContent = props => {

    return (
        <div className="flex flex-col text-center py-8">
            <h2 className="px-4">Your last step on the path toward changing your career</h2>
            
            {/* update with school-specific info */}
            <p className="text-center px-8">*** EXAMPLE: Coding Dojo designs its programs to cover multiple stacks of programming languages to help graduates develop a diverse skill-set. {props.schoolName} partners with Skills Fund to offer tuition and cost of living financing so more students like you can access their program.</p>
        </div>
    )
}
 
export default LeadContent