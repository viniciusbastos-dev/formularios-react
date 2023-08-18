import { Button, TextField } from "@mui/material";
import { PropTypes } from "prop-types";

function DadosEntrega({ aoEnviar }) {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar();
            }}
        >
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="filled"
                margin="normal"
            />
            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="filled"
                fullWidth
                margin="normal"
            />
            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="filled"
                margin="normal"
            />
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="filled"
                margin="normal"
            />
            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="filled"
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}
DadosEntrega.propTypes = {
    aoEnviar: PropTypes.func,
};

export default DadosEntrega;
