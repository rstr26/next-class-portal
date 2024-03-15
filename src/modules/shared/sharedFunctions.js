/** For <Input /> Validation UI
 * @param {string} type validation type '[max | min] chars' | '[max | min] num'
 * @param {object} condition object that contains condition values
 * @returns {number} 1 = negative | 2 = warning | 3 = positive
 */
export function InputValidation(type, condition){
    const { text, negative, positive, warning } = condition

    if(type === 'min chars'){    
        if(text.length < negative) return 1
        else if(text.length >= positive) return 3
    }
    else if(type === 'strength'){
        if(text.length <= negative) return 1
        else if(text.length < warning) return 2
        else return 3    
    }
}

/** For Tailwind Class Utils.
 * @param {string} type style type
 * @param {object} values contains values for determining which style to return
 * @returns {string} class utility
 */
export function TailwindUtils(type, values){
    if(type === 'size'){
        switch (values.size) {
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
    else if(type === 'inverted btn border'){
        if(values.inverted && (values.size === 'xs' || values.size === 'sm')){
            return 'border-sm'
        }
        else if(values.inverted && values.size === 'md'){
            return 'border-md'
        }
        else if(values.inverted && values.size === 'lg'){
            return 'border-lg'
        }
        else return 'border-sm'
    }
    else if(type === 'bg'){
        switch (values.bg) {
            case 'primary':
                return 'bg-primary'
            case 'secondary':
                return 'bg-secondary'    
            case 'positive':
                return 'bg-positive'
            case 'negative':
                return 'bg-negative'
            case 'neutral':
                return 'bg-neutral'
            default:
                return 'bg-primary'
        }
    }
    else if(type === 'hover bg'){
        switch (values.bg) {
            case 'primary':
                return 'hover:bg-primaryDark'
            case 'secondary':
                return 'hover:bg-secondaryDark'    
            case 'positive':
                return 'hover:bg-positiveDark'
            case 'negative':
                return 'hover:bg-negativeDark'
            case 'neutral':
                return 'hover:bg-neutralDark'
            default:
                return 'hover:bg-primaryDark'
        }
    }
    else if(type === 'border validation'){
        switch (values.num) {
            case 3:
                return 'border-positive'
            case 2:
                return 'border-warning'
            case 1:
                return 'border-negative'
            default:
                return 'border-negative'
        }
    }
}