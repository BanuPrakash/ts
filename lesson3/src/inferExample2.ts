// infer and ts template literal

interface CapitalizedChars {
    a: 'A',
    m: 'M',
    s: 'S',
    f: 'F'
}
type Capitalized<S> = S extends `${infer C}${infer T}` ? 
`${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}` : never

type DaysOfTheWeek = "sunday" | "monday" | "tuesday" | "friday"

// Sunday should be valid and not sunday

type CapitalizedDay = Capitalized<DaysOfTheWeek>

const today: CapitalizedDay = "Friday"