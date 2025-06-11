import { Spinner, LoaderContainer } from '../styled/components/LoaderStyled';

const Loader = () => {
    return (
        <LoaderContainer data-testid='loader'>
            <Spinner />
        </LoaderContainer>
    )
};

export default Loader;