function first(array){
    return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined{
    return array[array.length - 1]
}

const names = ['vitor', 'bruno', 'caio']

const firstName = first(names)

const lastName = last(names)

interface Ship {
    name: string
    pilot: string
  }
  
  interface Fighter extends Ship {
    weapons: number
    shields: number
  }
  
  interface Transport extends Ship {
    capacity: number
  }
  
  interface Speeder extends Ship {
    speed: number
    acceleration: number
  }

function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
  }
  
  const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
  }
  
  const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
  }
  
  // Agora a cópia funciona e os tipos inferidos estão corretos
  // copy1 é do tipo Ship e copy2 do tipo Fighter
  const copy1 = cloneShip(falcon, 'Milano', 'Peter')
  const copy2 = cloneShip(xWing, 'Black One', 'Poe')