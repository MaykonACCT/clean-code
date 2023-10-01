import { useUserContext } from "../../contexts/userContext"


function UserCard() {
    const { getUser } = useUserContext()

    const { avatar_url, bio, company, email, login, name } = getUser

    return (
        <section className="userContainer">
            {avatar_url ? (
                <div>
                    <img src={`${avatar_url}`} alt={`${name}`} />
                </div>
            ) : null}
            <div>
                <h1>{name}</h1>
                {bio ? <p>Bio: {bio}</p> : null}
                {company ? <p>Company: {company}</p> : null}
                {email ? <p>Email: {email}</p> : null}
                <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer"><b>Repositorios</b></a>
            </div>
        </section>
    )
}

export default UserCard