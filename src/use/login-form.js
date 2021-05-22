import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm () {
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Please enter email')
            .email('You must enter a valid email')
    )
    const PASSWORD_MIN_LENGTH = 8
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Please enter your password')
            .min(PASSWORD_MIN_LENGTH, `Password cannot be less than ${PASSWORD_MIN_LENGTH} characters`)
    )

    const isTooManyAttempts = computed( () => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout( () => submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit(values => {
        console.log('vasdas', values)
    })
    return {
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        isSubmitting,
        onSubmit,
        isTooManyAttempts
    }
}