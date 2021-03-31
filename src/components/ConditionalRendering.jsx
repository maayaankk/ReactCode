import React, { Component } from 'react'

 class ConditionalRendering extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
    render() {
        return(
            this.state.isLoggedIn ? <div>Welcome Mayank</div> : <div>Welcome Guest</div>
        )
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Mayank
        //         </div>
        //     ) 
        //     } else {
        //         return(
        //             <div>
        //                 Welcome Guest
        //             </div>
        //         )
        //     }
        // return (
        //     <div>
        //        <div>
        //            Welcome Mayank
        //        </div>
        //        <div>
        //            Welcome Guest
        //        </div>
        //     </div>
        // )
    }
}


export default ConditionalRendering
