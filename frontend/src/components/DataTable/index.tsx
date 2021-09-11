const DataTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/04/2021</td>
            <td>Barry Allen</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr>{' '}
          <tr>
            <td>23/04/2021</td>
            <td>Julia Cardoso</td>
            <td>32</td>
            <td>21</td>
            <td>11017.00</td>
          </tr>
          <tr>
            <td>24/04/2021</td>
            <td>Josiane Sheila</td>
            <td>50</td>
            <td>31</td>
            <td>17017.00</td>
          </tr>
          <tr>
            <td>25/04/2021</td>
            <td>Maria Cristina</td>
            <td>68</td>
            <td>57</td>
            <td>85717.00</td>
          </tr>
          <tr>
            <td>26/04/2021</td>
            <td>Paulo Nascimento</td>
            <td>53</td>
            <td>29</td>
            <td>35017.00</td>
          </tr>
          <tr>
            <td>27/04/2021</td>
            <td>Daniella Santos</td>
            <td>38</td>
            <td>45</td>
            <td>19017.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
