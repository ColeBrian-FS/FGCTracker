


let mockData = [{
    id: 1,
    username: "KingCole94",
    email: "waterbender411@hotmail.com",
    game: "Tekken 7",
    region: "North America"
}, {
    id: 2,
    username: "Steve123",
    email: "steve@steve@hotmail.com",
    game: "Street Fighter V",
    region: "South America"
}, {
    id: 3,
    username: "lisa456",
    email: "steve@steve@hotmail.com",
    game: "Street Fighter V",
    region: "South America"
}]


export class Player {
    constructor() {
        this.section = document.querySelector('.playercard-section')
        this.render()

        document.querySelector('#characterForm').addEventListener('submit', e => {
            e.preventDefault()
            this.add()
        })
    }
    Table(item) {
        let { id, username, email, game, region } = item
        this.table = document.createElement('table')
        this.table.classList.add('table-primary')
        this.table.classList.add('table')
        this.table.classList.add('table-striped')
        this.table.innerHTML = ` 
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Game</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${id}</th>
          <td>${username}</td>
          <td>${email}</td>
          <td>${game}</td>
          <td>${region}</td>
        </tr>
      </tbody>`

    }

    render() {
        mockData.map(item => {
            this.Table(item)
            this.section.appendChild(this.table)
        })
        console.log(this.section)
    }

    add() {
        this.section.innerHTML = " "
        let username = document.querySelector('#username').value
        let email = document.querySelector('#email').value
        let g = document.querySelector('#games-select')
        let r = document.querySelector('#region-select')
        let game = g.value
        let region = r.value
        let data = { id: mockData.length + 1, username, email, game, region }
        mockData.push(data)
        document.querySelector('#username').value = null
        document.querySelector('#email').value = null
        this.render()
    }
}