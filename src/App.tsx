import {Icon} from './Icon'
import './App.css';
import { UserProvider } from './contexts/userContext';

function gerarParametros(a:any, b:any, c:any, d:any) {
  const x = d.toUpperCase()
  const y = Number(c)

  return {
    bActive: a,
    cIcone: b,
    iLetra: y,
    sTexto: x
  }
}

function App() {
  const parametrosGerados = gerarParametros(true, false, '1', 'Banana')

  const ativado = parametrosGerados.bActive = false

  let usuario = {
    usuarioAvatar_url: null,
    usuarioLogin: null,
    usuarioBio: null,
    usuarioBlog: null,
    usuarioCompany: null,
    usuarioEmail: null,
    usuarioEvents_url: null,
    usuarioFollowers: null,
    usuarioFollowing: null,
    usuarioHireable: null,
    usuarioHtml_url: null,
    usuarioLocation: null,
    usuarioName: null,
    usuarioOrganizations_url: null,
    usuarioPublic_repos: null,
    usuarioTwitter_username: null,
    usuarioUrl: null,
    usuarioRepos_url: null,
  }

  return (
    <div className="App">
      <section className="App-header">
        <UserProvider>
          {ativado ? (
            parametrosGerados.cIcone == false ? (
              parametrosGerados.iLetra == 1 ? (
                <div className="vertical">
                  <button disabled={true} style={{fontFamily: 'sans-serif'}}>{parametrosGerados.sTexto}</button>
                </div>
              ) : (
                <div className="vertical">
                  <button disabled={true}  style={{fontFamily: 'serif'}}>{parametrosGerados.sTexto}</button>
                </div>
              )
            ) : (
              parametrosGerados.iLetra == 1 ? (
                <div className="vertical">
                  <button disabled={true} style={{fontFamily: 'sans-serif'}}><Icon /> {parametrosGerados.sTexto}</button>
                </div>
              ) : (
                <div className="vertical">
                  <button disabled={true} style={{fontFamily: 'serif'}}><Icon /> {parametrosGerados.sTexto}</button>
                </div>
              )
            )
          ) : (
            parametrosGerados.cIcone == false ? (
              parametrosGerados.iLetra == 1 ? (
                <div className="vertical">
                  <button id="buttonClick" onClick={async function(e) {
                    const r = await fetch(`https://api.github.com/users/${parametrosGerados.sTexto}`).then((r) => r.json())
                    
                      if(r.avatar_url) usuario.usuarioAvatar_url = r.avatar_url
                      if(r.login) usuario.usuarioLogin = r.login
                      if(r.repos_url) usuario.usuarioRepos_url = r.repos_url
                      if(r.bio) usuario.usuarioBio = r.bio
                      if(r.blog) usuario.usuarioBlog = r.blog
                      if(r.company) usuario.usuarioCompany = r.company
                      if(r.email) usuario.usuarioEmail = r.email
                      if(r.events_url) usuario.usuarioEvents_url = r.events_url
                      if(r.followers) usuario.usuarioFollowers = r.followers
                      if(r.following) usuario.usuarioFollowing = r.following
                      if(r.hireable) usuario.usuarioHireable = r.hireable
                      if(r.html_url) usuario.usuarioHtml_url = r.html_url
                      if(r.location) usuario.usuarioLocation = r.location
                      if(r.name) usuario.usuarioName= r.name
                      if(r.organizations_url) usuario.usuarioOrganizations_url = r.organizations_url
                      if(r.public_repos) usuario.usuarioPublic_repos = r.public_repos
                      if(r.twitter_username) usuario.usuarioTwitter_username = r.twitter_username
                      if(r.url) usuario.usuarioUrl = r.url

                      const botao = document.getElementById('buttonClick')
                      const elemento = document.createElement("div")
                      
                      elemento.setAttribute('id','container-usuario')

                      elemento.innerHTML = `
                        <div class="esquerda">
                          <img alt="${usuario.usuarioName || usuario.usuarioLogin}" src="${usuario.usuarioAvatar_url ?? ''}" />
                        </div>
                        <div class="direita">
                          <h1>${usuario.usuarioName || usuario.usuarioLogin}</h1>
                          <p>${usuario.usuarioBio ?? ''}</p>
                          <p>${usuario.usuarioCompany ?? ''}</p>
                          <p>${usuario.usuarioEmail ?? ''}</p>
                          <a href="https://github.com/${usuario.usuarioLogin}" target="_blank">Repositórios</a>
                          <p>${usuario.usuarioTwitter_username ?? ''}</p>
                        </div>
                      `

                      if(document.getElementById('container-usuario') == null) {
                        botao?.before(elemento)
                      }
                  }} style={{fontFamily: 'sans-serif'}}>{parametrosGerados.sTexto}</button>
                </div>
              ) : (
                <div className="vertical">
                  <button id="buttonClick" onClick={async function(e) {
                    const r = await fetch(`https://api.github.com/users/${parametrosGerados.sTexto}`).then((r) => r.json())
                      if(r.avatar_url) usuario.usuarioAvatar_url = r.avatar_url
                      if(r.bio) usuario.usuarioBio = r.bio
                      if(r.blog) usuario.usuarioBlog = r.blog
                      if(r.company) usuario.usuarioCompany = r.company
                      if(r.email) usuario.usuarioEmail = r.email
                      if(r.events_url) usuario.usuarioEvents_url = r.events_url
                      if(r.followers) usuario.usuarioFollowers = r.followers
                      if(r.following) usuario.usuarioFollowing = r.following
                      if(r.hireable) usuario.usuarioHireable = r.hireable
                      if(r.html_url) usuario.usuarioHtml_url = r.html_url
                      if(r.location) usuario.usuarioLocation = r.location
                      if(r.name) usuario.usuarioName= r.name
                      if(r.organizations_url) usuario.usuarioOrganizations_url = r.organizations_url
                      if(r.public_repos) usuario.usuarioPublic_repos = r.public_repos
                      if(r.twitter_username) usuario.usuarioTwitter_username = r.twitter_username
                      if(r.url) usuario.usuarioUrl = r.url

                      const botao = document.getElementById('buttonClick')
                      const elemento = document.createElement("div")
                      
                      elemento.setAttribute('id','container-usuario')

                      elemento.innerHTML = `
                        <div class="esquerda">
                          <img alt="${usuario.usuarioName || usuario.usuarioLogin}" src="${usuario.usuarioAvatar_url ?? ''}" />
                        </div>
                        <div class="direita">
                          <h1>${usuario.usuarioName || usuario.usuarioLogin}</h1>
                          <p>${usuario.usuarioBio ?? ''}</p>
                          <p>${usuario.usuarioCompany ?? ''}</p>
                          <p>${usuario.usuarioEmail ?? ''}</p>
                          <a href="https://github.com/${usuario.usuarioLogin}" target="_blank">Repositórios</a>
                          <p>${usuario.usuarioTwitter_username ?? ''}</p>
                        </div
                      `

                      if(document.getElementById('container-usuario') == null) {
                        botao?.before(elemento)
                      }
                  }}  style={{fontFamily: 'serif'}}>{parametrosGerados.sTexto}</button>
                  {usuario.usuarioName && JSON.stringify(usuario)}
                </div>
              )
            ) : (
              parametrosGerados.iLetra == 1 ? (
                <div className="vertical">
                  <button id="buttonClick" onClick={async function(e) {
                    const r = await fetch(`https://api.github.com/users/${parametrosGerados.sTexto}`).then((r) => r.json())
                      if(r.avatar_url) usuario.usuarioAvatar_url = r.avatar_url
                      if(r.bio) usuario.usuarioBio = r.bio
                      if(r.blog) usuario.usuarioBlog = r.blog
                      if(r.company) usuario.usuarioCompany = r.company
                      if(r.email) usuario.usuarioEmail = r.email
                      if(r.events_url) usuario.usuarioEvents_url = r.events_url
                      if(r.followers) usuario.usuarioFollowers = r.followers
                      if(r.following) usuario.usuarioFollowing = r.following
                      if(r.hireable) usuario.usuarioHireable = r.hireable
                      if(r.html_url) usuario.usuarioHtml_url = r.html_url
                      if(r.location) usuario.usuarioLocation = r.location
                      if(r.name) usuario.usuarioName= r.name
                      if(r.organizations_url) usuario.usuarioOrganizations_url = r.organizations_url
                      if(r.public_repos) usuario.usuarioPublic_repos = r.public_repos
                      if(r.twitter_username) usuario.usuarioTwitter_username = r.twitter_username
                      if(r.url) usuario.usuarioUrl = r.url

                      const botao = document.getElementById('buttonClick')
                      const elemento = document.createElement("div")
                      
                      elemento.setAttribute('id','container-usuario')

                      elemento.innerHTML = `
                        <div class="esquerda">
                          <img alt="${usuario.usuarioName || usuario.usuarioLogin}" src="${usuario.usuarioAvatar_url ?? ''}" />
                        </div>
                        <div class="direita">
                          <h1>${usuario.usuarioName || usuario.usuarioLogin}</h1>
                          <p>${usuario.usuarioBio ?? ''}</p>
                          <p>${usuario.usuarioCompany ?? ''}</p>
                          <p>${usuario.usuarioEmail ?? ''}</p>
                          <a href="https://github.com/${usuario.usuarioLogin}" target="_blank">Repositórios</a>
                          <p>${usuario.usuarioTwitter_username ?? ''}</p>
                        </div
                      `

                      if(document.getElementById('container-usuario') == null) {
                        botao?.before(elemento)
                      }
                  }} style={{fontFamily: 'sans-serif'}}><Icon /> {parametrosGerados.sTexto}</button>
                  {usuario.usuarioName && JSON.stringify(usuario)}
                </div>
              ) : (
                <div className="vertical">
                  <button id="buttonClick" onClick={async function(e) {
                    const r = await fetch(`https://api.github.com/users/${parametrosGerados.sTexto}`).then((r) => r.json())
                      if(r.avatar_url) usuario.usuarioAvatar_url = r.avatar_url
                      if(r.bio) usuario.usuarioBio = r.bio
                      if(r.blog) usuario.usuarioBlog = r.blog
                      if(r.company) usuario.usuarioCompany = r.company
                      if(r.email) usuario.usuarioEmail = r.email
                      if(r.events_url) usuario.usuarioEvents_url = r.events_url
                      if(r.followers) usuario.usuarioFollowers = r.followers
                      if(r.following) usuario.usuarioFollowing = r.following
                      if(r.hireable) usuario.usuarioHireable = r.hireable
                      if(r.html_url) usuario.usuarioHtml_url = r.html_url
                      if(r.location) usuario.usuarioLocation = r.location
                      if(r.name) usuario.usuarioName= r.name
                      if(r.organizations_url) usuario.usuarioOrganizations_url = r.organizations_url
                      if(r.public_repos) usuario.usuarioPublic_repos = r.public_repos
                      if(r.twitter_username) usuario.usuarioTwitter_username = r.twitter_username
                      if(r.url) usuario.usuarioUrl = r.url

                      const botao = document.getElementById('buttonClick')
                      const elemento = document.createElement("div")
                      
                      elemento.setAttribute('id','container-usuario')

                      elemento.innerHTML = `
                        <div class="esquerda">
                          <img alt="${usuario.usuarioName || usuario.usuarioLogin}" src="${usuario.usuarioAvatar_url ?? ''}" />
                        </div>
                        <div class="direita">
                          <h1>${usuario.usuarioName || usuario.usuarioLogin}</h1>
                          <p>${usuario.usuarioBio ?? ''}</p>
                          <p>${usuario.usuarioCompany ?? ''}</p>
                          <p>${usuario.usuarioEmail ?? ''}</p>
                          <a href="https://github.com/${usuario.usuarioLogin}" target="_blank">Repositórios</a>
                          <p>${usuario.usuarioTwitter_username ?? ''}</p>
                        </div
                      `

                      if(document.getElementById('container-usuario') == null) {
                        botao?.before(elemento)
                      }
                  }} style={{fontFamily: 'serif'}}><Icon /> {parametrosGerados.sTexto}</button>
                  {usuario.usuarioName && JSON.stringify(usuario)}
                </div>
              )
            )
          )}
        </UserProvider>
      </section>
    </div>
  );
}

export default App;
