import { useUserContext } from "../../contexts/userContext"


function UserCard() {
    const { getUser } = useUserContext()

    if(!getUser) {
        return null
    }

    const { avatar_url, bio, company, email, login, name } = getUser

    return (
        <section className="userContainer">
            {avatar_url ? (
                <div>
                    <img src={`${avatar_url}`} alt={`${name ?? login}`} />
                </div>
            ) : null}
            <div>
                <h1>{name ?? login}</h1>
                {bio ? <p>Bio: {bio}</p> : null}
                {company ? <p>Company: {company}</p> : null}
                {email ? <p>Email: {email}</p> : null}
                {login ? <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer"><b>Repositorios</b></a> : null}
            </div>
        </section>
    )
}

export default UserCard