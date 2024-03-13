import Button from "@/modules/shared/tailwind-components/Button";
import Container from "@/modules/shared/tailwind-components/Container";
import Input from "@/modules/shared/tailwind-components/Input";
import { UserPlusIcon } from '@heroicons/react/24/outline'

export default function Home() {
    return (
      <Container>
        <div className='flex gap-1'>
          <Button text='Add Student' icon={<UserPlusIcon />} type='primary'/>
          {/* <Button text='Remove Student' inverted type='positive' /> */}
        </div>
        <Input placeholder='Input name' size='xs' label='Name'/>
      </Container>
    );
}
