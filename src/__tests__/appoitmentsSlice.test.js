import {
  scheduleAppointmentAsync, cancelAppointmentAsync, getAllAppointmentsAsync, appointmentsSlice,
} from '../redux/appointments/appointmentsSlice';

const initialState = {
  loading: false,
  appointments: [],
  error: null,
};

const response = [
  {
    id: 1,
    date: '02-09-2022',
    duration: 5,
  },
];

describe('appointmentsSlice', () => {
  it('should return the initial state', () => {
    expect(appointmentsSlice.reducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle getAllAppointmentsAsync.pending', () => {
    expect(appointmentsSlice.reducer(initialState, getAllAppointmentsAsync.pending())).toEqual({
      loading: true,
      appointments: [],
      error: null,
    });
  });

  it('should handle getAllAppointments.fulfilled', () => {
    expect(appointmentsSlice.reducer(initialState, {
      type: getAllAppointmentsAsync.fulfilled,
      payload: response,
    })).toEqual({
      loading: false,
      appointments: response,
      error: null,
    });
  });

  it('should handle scheduleAppointmentAsync.fulfilled', () => {
    expect(appointmentsSlice.reducer(initialState, {
      type: scheduleAppointmentAsync.fulfilled,
    })).toEqual({
      loading: false,
      appointments: [],
      error: null,
    });
  });

  it('should handle cancelAppointmentAsync.fulfilled', () => {
    expect(appointmentsSlice.reducer(initialState, {
      type: cancelAppointmentAsync.fulfilled,
    })).toEqual({
      loading: false,
      appointments: [],
      error: null,
    });
  });
});
