import LogInUI from "@/modules/components/login/LogInUI";
import Button from "@/modules/shared/tailwind-components/Button";
import Container from "@/modules/shared/tailwind-components/Container";
import Input from "@/modules/shared/tailwind-components/Input";
import { UserMinusIcon, UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

export default function Home() {

    const [input, setInput] = useState('')

    return (
      <LogInUI />
    );
}
