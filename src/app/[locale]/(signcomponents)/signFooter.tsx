import { HStack, Image , Link} from "@chakra-ui/react"

const SignFooter = () => {
    return (
        <HStack p='24px 32px' gap='35px' alignItems='center'>
            <Image src="asan-logo-full 1.svg"></Image>
            <Link href="/">ASAN İmza necə alınmalı?</Link>
      </HStack>
    )
}

export default SignFooter