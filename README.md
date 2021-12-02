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
