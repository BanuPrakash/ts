
type ChessLetters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

type ChessNumbers = 1 | 2 | 3 | 4 | 5 |  6 | 7 | 8

type ChessPosition = `${ChessLetters}${ChessNumbers}`

let position: ChessPosition = 'A8'

type GapType = 'margin' | 'padding'
type PositionType = 'top' | 'right' | 'botton' | 'left'

type GapCss = `${GapType}-${PositionType}` | GapType

let margin: GapCss = 'margin-botton'
margin = 'padding'; // valid

type SizeType = 'rem' | 'em' | 'px' | '%'
type SizeCss = `${number}${SizeType}`

let size: SizeCss = '40px'
