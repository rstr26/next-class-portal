/** For <Input /> Validation UI
 * @param {string} type validation type '[max | min] chars' | '[max | min] num'
 * @param {object} condition object that contains condition values
 * @returns {number} 1 = negative | 2 = warning | 3 = positive
 */
export function InputValidation(type, condition){
    if(type === 'min chars'){
        const { text, negative, warning, positive } = condition
        if(text.length < negative) return 1
        else if(text.length < warning) return 2
        else if(text.length >= positive) return 3
    }
}

export function TailwindUtils(type, value){
    if(type === 'size'){
        switch (value) {
            case 'xs':
                return 'text-xs'
            case 'sm':
                return 'text-sm'
            case 'md':
                return 'text-md'
            case 'lg':
                return 'text-lg'
            case 'xl':
                return 'text-xl'
            default:
                return 'text-xs'
        }
    }
}