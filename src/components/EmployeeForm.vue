<template>
  <div class="card p-3 mb-3">
    <h4>Add Employee</h4>

    <input v-model="employee.name" placeholder="Name" class="form-control mb-2" />
    <input v-model="employee.designation" placeholder="Designation" class="form-control mb-2" />
    <input v-model="employee.department" placeholder="Department" class="form-control mb-2" />
    <input v-model="employee.salary" placeholder="Salary" type="number" class="form-control mb-2" />

    <button class="btn btn-primary" @click="submit">
      {{ isEdit ? 'Update' : 'Add' }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['selectedEmployee'],
  data() {
    return {
      employee: {
        name: '',
        designation: '',
        department: '',
        salary: ''
      },
      isEdit: false
    }
  },
  watch: {
    selectedEmployee(newVal) {
      if (newVal) {
        this.employee = { ...newVal }
        this.isEdit = true
      }
    }
  },
  methods: {
    submit() {
      this.$emit('save', this.employee)
      this.employee = { name: '', designation: '', department: '', salary: '' }
      this.isEdit = false
    }
  }
}
</script>