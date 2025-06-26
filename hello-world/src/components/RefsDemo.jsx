import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //   Чтобы ссылаться на инпут по всему файлу
        this.inputRef = React.createRef()
        // Другой способ
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element;
        };
    }

    componentDidMount() {
        // Чтобы при заходе на страницу инпут был фокусирован
        this.inputRef.current.focus()
        console.log(this.inputRef);

        // Для другого способа
        // if (this.cbRef) {
        //     this.cbRef.focus()
        // }

    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                {/* Другой способ */}
                {/* <input type="text" ref={this.setCbRef} /> */}

                <button onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

export default RefsDemo