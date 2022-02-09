interface DetailColumnsProps {
    title: string;
    data?: string;
}

export default function DetailColumns({ title, data }: DetailColumnsProps) {
    return (
        <div className="plot">
            <h4 className="title">
                {title}
            </h4>
            {data?.split(',').map((item, index) => {
                return <h4 key={index} className="content">{item}</h4>;
            })}
        </div>
    )
}