import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Đã có tài khoản?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Đăng nhập để có trải nghiệm tốt hơn.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/tai-khoan">
          <Button
            variant="secondary"
            className="h-10"
            data-testid="sign-in-button"
          >
            Đăng nhập
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
