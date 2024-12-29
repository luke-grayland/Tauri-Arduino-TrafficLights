import { AwesomeButton } from 'react-awesome-button';

type LightButtonProps = {
    handleLedChange: (colour: String) => void,
    colourName: String
}

const LightButton: React.FC<LightButtonProps> = ({handleLedChange, colourName}) => {

    return (
        <>
            <AwesomeButton onPress={() => handleLedChange(colourName)}
            style={{ 
                marginLeft: '5rem', 
                marginRight: '5rem',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                }}>
            {colourName}
            </AwesomeButton>
        </>
    )
}

export default LightButton