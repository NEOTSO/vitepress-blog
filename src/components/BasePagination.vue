<script setup lang="ts">
interface IProps {
    current: number;
    pageSize: number;
    total: number;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
    (e: "onChange", page: number): void;
}>();

const goPrev = () => {
    if (props.current !== 1) {
        emit("onChange", props.current - 1);
    }
};

const goNext = () => {
    if (props.current !== props.total) {
        emit("onChange", props.current + 1);
    }
};
</script>

<template>
    <ul class="pagination">
        <li
            :class="['pagination-item', { 'is-disabled': props.current === 1 }]"
            @click="goPrev"
        >
            Prev
        </li>
        <li
            :class="['pagination-item', { 'is-active': props.current === i }]"
            v-for="i in total"
            :key="i"
            @click="emit('onChange', i)"
        >
            {{ i }}
        </li>
        <li
            :class="['pagination-item', { 'is-disabled': props.current === props.total }]"
            @click="goNext"
        >
            Next
        </li>
    </ul>
</template>

<style scoped>
.pagination {
    @apply flex justify-center items-center font-oswald;
}

.pagination-item {
    @apply flex justify-center items-center mx-4 cursor-pointer;
}

.pagination-item.is-disabled {
    @apply text-gray-400;
}

.pagination-item.is-active {
    @apply font-bold underline;
}
</style>
