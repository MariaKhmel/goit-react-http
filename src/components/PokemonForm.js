import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Component } from 'react';

const styles = { form: { marginBottom: 20 } };

class PokemonForm extends Component {
    state = {
        pokemonName: ''
    }

    handleInputChange = e => {
        const pokemonName = e.target.value.toLowerCase();
        this.setState({ pokemonName })
    }


    handleFormSubmit = e => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            toast.error('Please type pokemon name');
            return;
        }
        this.props.onSubmit(this.state.pokemonName)
        this.setState({ pokemonName: '' });
    }

    render() {
        return (<>
            <form onSubmit={this.handleFormSubmit} style={styles.form}>
                <input type='input' name='input' value={this.state.pokemonName} onChange={this.handleInputChange} />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Find
                </button>
            </form>
        </>);
    }
}

export default PokemonForm;