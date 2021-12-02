# tyscript React practice

## 설정 & 실행

### 설정

```powershell
# 설치
npx create-react-app ts-react-practice --template=typescript
```

## note

* 확장자 : ```.tsx```

* ```React.FC```
    * ```const App: React.FC = () => { ... }```
    * 안쓰는 것이 좋은 것 같음  
    * <details>
        <summary>문제점</summary>
   
        * Greeting.tsx
            ```ts
            import React from 'react';

            type GreetingProps = {
                name: string;
                mark: string;
            }

            // props : generic 사용
            const Greetings: React.FC<GreetingProps> = ({name, mark}) => (
                <div>Hello, {name} {mark}</div>
            )

            Greetings.defaultProps = {
                mark: '!'
            };

            export default Greetings;
            ```
            * defaultProps로 넣었음에도 불구하고 ```<Greetings name="Hello" />```를 하게 되면 mark가 없다며 에러남
    </details>

* Function Component
    * props
        * type, generic 사용해서 받음
        * [예제 : Greeting.tsx](./src/Greeting.tsx)
    * state
        * useState 
            * generics 
                * 사용 방법 : ```const [count, setCount] = useState<number>(0);```
            * generics 사용하지 않아도 됨(타입 유추함)
            * 상태가 null일 수도 있는 경우는 사용
                ```ts
                type Information = { name: string; description: string };
                const [info, setInformation] = useState<Information | null>(null);
                ```
        * [예제 : CounterState.tsx](./src/CounterState.tsx)
    * event type
        * ```onChange``` : ```React.ChangeEvent<HTMLInputElement>```
        * ```onSubmit``` : ```React.FormEvent<HTMLFormElement>```
        * [예제 : MyForm.tsx](./src/MyForm.tsx)
    * reducer
        * action
            * type 사용
            * 열거시 ```|``` 사용
            * ex ) ```type Action = { type: 'INCREASE' } | { type: 'DECREASE' };```
        * reducer
            * useReducer를 사용하는 이유? 
                * 아마 하나의 state에 대해 여러가지 action이 있는 경우 사용
                * 예를 들면, counter app에서 count라는 state가 있을 때 count는 증가하기도 하고, 감소하기도 하는 action이 있다. 이렇게 여러가지 action이 있다면 하나로 관리하는 것이 편할 것. 그래서 reducer를 사용하는 듯
            * ```const [count, dispatch] = useReducer(reducer, 0);```
        * [예제 : CounterReducer.tsx](./src/CounterReducer.tsx)