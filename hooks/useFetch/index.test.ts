import { act, renderHook, waitFor } from "@testing-library/react-native"
import useFetch from "."

describe('useFetch', () => {
    test('should return initial values', () => {
        const { result } = renderHook(() => useFetch())

        expect(result.current.isLoading).toEqual(false);
        expect(result.current.data).toEqual([]);

    })

    test('should isLoading to be true if invoke handleSetLoading', () => {

        const { result } = renderHook(() => useFetch())

        act(() => {
            result.current.handleSetLoading()
        })

        expect(result.current.isLoading).toBe(true)

    })

    test('get data', async () => {
        jest.useFakeTimers();
        const { result } = renderHook(() => useFetch())

        await act(() => {
            jest.runAllTimers();
        });

        await waitFor(() => {
            expect(result.current.data).toEqual([{ name: 'Ronald' }]);
        })

        console.log(result.current.data)
    })


})