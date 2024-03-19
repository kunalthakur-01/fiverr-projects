import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    if(action.type === 'INPUT_CHANGE'){
        // if key is not present in the state
        if(!state.inputs[action.id]) {
            return {
                inputs: state.inputs,
                formIsValid: state.formIsValid
            }
        }
        else{
            state.inputs[action.id] = {
                value: action.value,
                isValid: action.isValid,
            }
        }

        for (const inputId in state.inputs) {
            if(!state.inputs[inputId].isValid) {
                state.formIsValid = false;
                break;
            }
            state.formIsValid = true;
        }

        return {
            inputs: state.inputs,
            formIsValid: state.formIsValid
        }

    }
    else if(action.type === 'SET'){
        return {
            inputs: action.inputs,
            formIsValid: action.formIsValid,
        }
    }

    else return state;
}

const useForm = (initialData, initialValidity) => {
    const [formState, dispatch] = useReducer(formReducer , initialData = {
        inputs: initialData,
        formIsValid: initialValidity
    });
    // console.log(formState);

    const inputHandler = useCallback(( data ) => {
        dispatch({type: 'INPUT_CHANGE', id: data.id, value: data.value, isValid: data.isValid});
    });

    const setFormData = useCallback((inputs, isValid) => {
        dispatch({ type: 'SET', inputs, formIsValid: isValid });
    });

    return [
        formState,
        inputHandler,
        setFormData,
    ]

};

export default useForm;