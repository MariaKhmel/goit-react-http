import { Component } from 'react';
import { fetchPokemonByName } from './pokemon-api';
import { PokemonDataView } from './PokemonDataView';
import { FaSpinner } from "react-icons/fa";
import { MdError } from "react-icons/md";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: Status.IDLE,
    };


    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            this.setState({ status: Status.PENDING });

                fetchPokemonByName(nextName)
                .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED })) 
                    .catch(error => {
                        this.setState({ status: Status.REJECTED, error:error.message })
                    })
        }
    }


    render() {
        const { pokemon, error, status } = this.state;
       

        if (status === Status.IDLE) {
            return <div>Enter pokemon name.</div>;
        }

        if (status === Status.PENDING) {
            return <div><FaSpinner /> Pending...</div>;
        }

        if (status === Status.REJECTED) {
            return <div>< MdError /> {error}</div>;
        }

        if (status === Status.RESOLVED) {
            return <PokemonDataView pokemon={this.state.pokemon} />;
        }
    }
}