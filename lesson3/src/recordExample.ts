
type Streams = "salary" | "bonus" | "hra"

// utility
type Incomes = Record<Streams, number>

const income: Incomes = {
    salary: 2345,
    bonus: 342,
    hra: 242
}

for(const rev in income) {
    console.log(income[rev as keyof Incomes])
}

// income.er = 222;