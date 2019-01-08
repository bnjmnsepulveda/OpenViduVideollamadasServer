package com.adportas.videollamadas.datasource;

import com.adportas.videollamadas.datasource.interfaces.IContactoAgenteDAO;
import com.adportas.videollamadas.domain.ContactoAgente;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

/**
 *
 * @author benjamin
 */
@Repository
public class ContactoAgenteDAO implements IContactoAgenteDAO {

    @Autowired
    private JdbcTemplate jdbc;

    @Override
    public ContactoAgente readById(int id) {
        return jdbc.queryForObject("SELECT * FROM secretaria WHERE id = ?", new ContactoAgenteMapper(), id);
    }

    @Override
    public List<ContactoAgente> readAll() {
        return jdbc.query("SELECT * FROM secretaria", new ContactoAgenteMapper());
    }

    public class ContactoAgenteMapper implements RowMapper<ContactoAgente> {

        private ContactoAgente agente;

        @Override
        public ContactoAgente mapRow(ResultSet rs, int rowNum) throws SQLException {
            agente = new ContactoAgente();
            agente.setId(rs.getLong("id"));
            agente.setNombre(rs.getString("nombre"));
            agente.setApellido(rs.getString("apellido_agente"));
            agente.setEnLinea(false);
            agente.setUsuarioOperkall(rs.getString("usuario_operkall"));
            return agente;
        }

    }

}
