export default function Greeting(props) {
    return (
        <div>
            <h1>Greeting Comp.</h1>
            <h3>Hello, {props.fname} </h3>
            <h4>Id of {props.fname} is {props.myid}</h4>
        </div>
    )
}