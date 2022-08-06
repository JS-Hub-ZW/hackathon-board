import {Text} from '@chakra-ui/react'
import LeaderBoard from '../src/components/leaderboard'
import Section from '../src/components/section'

const Leaderboard = () => {
    return (
     <>
     <Section delay={0.2}>
       <LeaderBoard/>
     </Section>
     </>
    )
}

export default Leaderboard