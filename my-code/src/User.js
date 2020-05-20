import React from 'react'

export class User extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            let url = await fetch("https://jsonplaceholder.typicode.com/users");
            let res = await url.json();
            this.setState({ users: res });
        } catch (error) {
            console.log(error);
        }

    }

    displayData = (users) => {
        document.title = `Users | ${users.length} records`;

        let res;

        let records = users.map((each, index) =>
            (<tr key={each.id}>
                <td>{index + 1}</td>
                <td>{each.name}</td>
                <td>{each.username}</td>
            </tr>)
        );
        if (users.length) {
            res = (
                <>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records}
                        </tbody>
                    </table>
                </>
            );
        }
        return res;
    };


    render() {
        return (
            <>
                {this.displayData(this.state.users)}
            </>
        )
    }
}