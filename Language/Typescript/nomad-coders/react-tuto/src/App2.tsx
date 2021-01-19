import React, { Component } from 'react'
import { Form, Input } from './input'
import Number from './Number'

interface IState{
    counter: number;
    value: string;
}

class App extends Component<{}, IState>{ // P는 props, S는 state를 의미한다.
    state = {
        counter: 0,
        value: ''
    }
    add = (): void => { // 타입추론을 통해 알아서 return값이 void인것을 지정해준다. 하지만 명시해줘도 상관없다.
        this.setState(prev => {
            return {
                counter: prev.counter + 1 // 여기에 오류가 나게 되는데 Component부분에 타입을 지정해준다. (IState)
            }
        })
    }
    minus = (): void => {
        this.setState(prev => {
            return {
                counter: prev.counter - 1 // 여기에 오류가 나게 되는데 Component부분에 타입을 지정해준다. (IState)
            }
        })
    }
    onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        console.log(event)
    }
    onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }
    render(){
        const { counter,value } = this.state
        return (
            <>
                {/* count에 값을 Number.tsx에서 정해준 number가 아닌 다른 값이 넘어가면 에러 표시가 난다.
                원래 이 에러는 실행이 되야 나오는 콘솔에서 나오는 에러인데 바로 확인 가능하다는 점에서 매우 좋다. */}
                <Form onSubmit={this.onSubmit}>
                    <Input value={value} onChange={this.onChange}></Input>
                </Form>
                <Number count={counter}></Number> 
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </>
        )
    }
    
}

export default App