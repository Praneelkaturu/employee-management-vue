<template>
  <div class="container mt-4">
    <h2>Employee Management System</h2>

    <EmployeeForm
      :selectedEmployee="selectedEmployee"
      @save="saveEmployee"
    />

    <EmployeeList
      :employees="employees"
      @edit="editEmployee"
      @delete="deleteEmployee"
    />
  </div>
</template>

<script>
import api from './services/api'
import EmployeeForm from './components/EmployeeForm.vue'
import EmployeeList from './components/EmployeeList.vue'

export default {
  components: { EmployeeForm, EmployeeList },

  data() {
    return {
      employees: [],
      selectedEmployee: null
    }
  },

  mounted() {
    this.fetchEmployees()
  },

  methods: {
    async fetchEmployees() {
      const res = await api.getEmployees()
      this.employees = res.data
    },

    async saveEmployee(emp) {
      if (emp.id) {
        await api.updateEmployee(emp.id, emp)
      } else {
        await api.addEmployee(emp)
      }
      this.fetchEmployees()
    },

    editEmployee(emp) {
      this.selectedEmployee = emp
    },

    async deleteEmployee(id) {
      await api.deleteEmployee(id)
      this.fetchEmployees()
    }
  }
}
</script>