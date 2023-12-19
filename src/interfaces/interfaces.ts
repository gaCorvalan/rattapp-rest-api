interface User {
  id: string
  email: string
  password: string
  name: string
  surname: string
  workIncome: number
  otherIncome: OtherIncome
  cards: [Card]
  lastSpendings: [Spend]
  accounts: [Account]
}

interface OtherIncome {
  description: string
  amount: number
}

interface Bank {
  name: string
}

interface Card {
  id: string
  description: string
  bank: string
  // typeOfCard: CardType
  // availableAmount: Number
  // cardClosure: Date
  // expiration: Date
  // spending: Number
  // dolarSpending: Number
  // spendings: Spend[]
}

interface CardType {
  id: string
  name: string
}

interface Account {
  id: string
  name: string
  amountAvailable: string
  bank: Bank
}

interface Spend {
  id: string
  userId: string,
  description: string,
  amount: number,
  card: Card,
  date: Date
}

export { User, Account, Bank, Card, CardType, Spend, OtherIncome }
