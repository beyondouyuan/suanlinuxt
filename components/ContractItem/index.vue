<template>
    <section class="contract-wrapper">
      <div class="contract-content-table">
        <table class="table">
            <tbody>
                <tr v-for="(item, index) of columns" :key="index">
                    <th>
                        {{item.title}}
                    </th>
                    <td v-if="item.key == 'benefit'">{{dataSourece[item.key] | parseTime}}</td>
                    <td v-else>{{dataSourece[item.key]}}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </section>
</template>
<script>
export default {
    name: 'ContractItem',
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataSourece: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
table {
    width: 100%;
    table-layout: fixed;
    empty-cells: show;
    border-collapse: collapse;
    margin: 0 auto;
    th,
    td {
        text-align: center;
        padding: 14px;
        border: 1px solid #EEEEEE;
        &:first-child {
            border-left: none
        }
    }
    th {
        width: 25%;
        border: 1px solid #EEEEEE;
    }
}
</style>
