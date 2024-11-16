export default function PaginaConvite(props: any) {
    console.log(props)
    return (
        <div>
            <span>{props.params.alias}</span>
        </div>
    )
}