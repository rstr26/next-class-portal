import Button from "@/modules/shared/tailwind-components/Button";
import Container from "@/modules/shared/tailwind-components/Container";
import Input from "@/modules/shared/tailwind-components/Input";
import { UserMinusIcon, UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

export default function Home() {

    const [input, setInput] = useState('')

    return (
      <Container>
        <div className='flex gap-1'>
          <Button text='Add Student' icon={<UserPlusIcon />} type='positive' onClick={() => console.log(input)}/>
          <Button text='Remove Student' icon={<UserMinusIcon />} type='negative' inverted />
          {/* <Button text='Remove Student' inverted type='positive' /> */}
        </div>

        <Input 
          placeholder='Input name' 
          size='xs' 
          // label='Name' 
          value={input} 
          content={(t) => setInput(t)}
        />

        <Input 
          placeholder='Input password' 
          label='Password' 
          icon={<MagnifyingGlassIcon />} 
          button={() => console.log('clicked')}
          size='xs'
          validation={{ type: 'strength', min: 3, warn: 10 }}
        />
      </Container>
    );
}
