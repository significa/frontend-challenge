interface DetailColumnsProps {
    title?: string;
    data?: string;
}

export default function DetailColumns({ title, data }: DetailColumnsProps) {
    return (
        <div className="plot">
            <h4 className="title">
                Genre
            </h4>
            {data?.split(',').map((item, i) => {
                return <h4 key={i} className="content">{item}</h4>;
            })}
        </div>
    )
}