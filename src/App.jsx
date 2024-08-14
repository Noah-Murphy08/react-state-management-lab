import { useState } from "react";


const App = () => {

  const [team, setTeam] = useState([])

  const [totalStrength, setTotalStrength] = useState(0)

  const [totalAgility, setTotalAgility] = useState(0)

  const [money, setMoney] = useState(100)

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleTotalStrength = (team) => {
    return team.reduce((total, fighter) => total + fighter.strength, 0)
  }

  const handleTotalAgility = (team) => {
    return team.reduce((total, fighter) => total + fighter.agility, 0)
  }

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter]
      setTeam(newTeam);
      setMoney(money - fighter.price)
      setTotalStrength(handleTotalStrength(newTeam))
      setTotalAgility(handleTotalAgility(newTeam))
    } else {
      console.log('Not enough money')
    }
  }

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((teamFighter) => teamFighter.name !== fighter.name)
    setTeam(newTeam)
    setMoney(money + fighter.price)
    setTotalStrength(handleTotalStrength(newTeam))
    setTotalAgility(handleTotalAgility(newTeam))
  }
  

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <ul>
        {zombieFighters.map((fighter, idx) => (
          <li key={idx}>
            <img src={fighter.img} alt="color" /><br />
            Name: {fighter.name}<br />
            Price: {fighter.price}<br />
            Strength: {fighter.strength}<br />
            Agility: {fighter.agility}<br />
            <button onClick={() => handleAddFighter(fighter)}>
              Add Fighter
            </button>
          </li>
        ))}
      </ul>
      <h1>My Zombie Fighters</h1>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Money: {money}</h2>
      <ul>
        {team.map((fighter, idx) => (
          <li key={idx}>
            <img src={fighter.img} alt="color" /><br />
            Name: {fighter.name}<br />
            Price: {fighter.price}<br />
            Strength: {fighter.strength}<br />
            Agility: {fighter.agility}<br />
            <button onClick={() => handleRemoveFighter(fighter)}>
              Remove Fighter
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
