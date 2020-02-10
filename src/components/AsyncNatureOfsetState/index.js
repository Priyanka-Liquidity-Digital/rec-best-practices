import React, {Component} from 'react';

class AsyncNatureSubCopm extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            dollars : 10,
        };
        this.saveButtonRef = (btn => { this.btnRef = btn });
    }

    componentDidMount(){
        this.btnRef.addEventListener('mouseleave', this.onMouseLeaveHandler);
        
        setTimeout(this.onTimeoutHandler, 10000);

        fetch('https://api.github.com/users')
        .then(this.onAjaxCallback);
    }
    
    //=============================== before function not working as expected. ======================================
    // onClickHandler = () => {
    //     console.log('state before (onClickHandler): ' + JSON.stringify(this.state));

    //     this.setState({
    //         dollars : this.state.dollars + 10
    //     });

    //     console.log('state after (onClickHandler): ' + JSON.stringify(this.state));
    // }


    onClickHandler = () =>  {
        console.log('State before (onClickHandler): ' + JSON.stringify(this.state));

        this.setState({
            dollars: this.state.dollars + 10
        }, () => {
            
        console.log('Here state will always be updated to latest version!');

        console.log('State after (onClickHandler): ' + JSON.stringify(this.state));
        });
     }

    onMouseLeaveHandler = () => {
        console.log('State before (mouseleave): ' + JSON.stringify(this.state));

        this.setState({
          dollars: this.state.dollars + 20
        });

        console.log('State after (mouseleave): ' + JSON.stringify(this.state));
    }

    onTimeoutHandler = () =>{
        console.log('State before (timeout): ' + JSON.stringify(this.state));
        
        this.setState({
          dollars: this.state.dollars + 30
        });

        console.log('State after (timeout): ' + JSON.stringify(this.state));
    }

    onAjaxCallback = (response) =>{
        if(response.status !== 200){
            console.log('Error in Ajac call : ' + response.statusText);
            return;
        }

        console.log('State before (Ajax call): ' + JSON.stringify(this.state));

        this.setState({
            dollars: this.state.dollars + 40
        });

        console.log('State after (Ajax call): ' + JSON.stringify(this.state));

    }

    render(){
        console.log("State in render: " + JSON.stringify(this.state));

        return(
            <div>
                <button
                    className="btn-click"
                    ref={this.saveButtonRef}
                    onClick={this.onClickHandler}
                >
                    Click me
                </button>
                <div className="understanding">
                   Click on the button to see the output Console in console window.
                </div>
            </div>
        )
    }
}

export default AsyncNatureSubCopm

/*   
    Only state is not working as expected on the event onClickHandler, state is not changing immidiately as it is working fine for other event listenrs. It is behaving as Synchronous way.
    The method's signature support two parameters in first onClick code we are using only one. The second argument that you can pass in is a callback function that will always be executed after the state has been updated
                        
    output: Using first onclickHandler Function :

        State in render: {"dollars":10}

        State before (Ajax call): {"dollars":10}
        State in render: {"dollars":50}
        State after (Ajax call): {"dollars":50}

        State before (timeout): {"dollars":50}
        State in render: {"dollars":80}
        State after (timeout): {"dollars":80}

        state before (onClickHandler): {"dollars":80}
        state after (onClickHandler): {"dollars":80}
        State in render: {"dollars":90}

        State before (mouseleave): {"dollars":90}
        State in render: {"dollars":110}
        State after (mouseleave): {"dollars":110}


    output: Using second onclickHandler Function :

        State in render: {"dollars":10}

        State before (Ajax call): {"dollars":10}
        State in render: {"dollars":50}
        State after (Ajax call): {"dollars":50}

        State before (timeout): {"dollars":50}
        State in render: {"dollars":80}
        State after (timeout): {"dollars":80}

        State before (onClickHandler): {"dollars":80}
        State in render: {"dollars":90}
        Here state will always be updated to latest version!
        State after (onClickHandler): {"dollars":90}
        
        State before (mouseleave): {"dollars":90}
        State in render: {"dollars":110}
        State after (mouseleave): {"dollars":110}
                    
*/