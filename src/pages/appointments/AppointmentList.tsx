import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, AlertCircle } from 'lucide-react';
import { RootState } from '../../store';
import { updateAppointmentStatus } from '../../store/slices/appointmentSlice';
import { AppointmentCard } from '../../components/appointments/AppointmentCard';

export const AppointmentList = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state: RootState) => state.appointments.appointments);

  const handleCancelAppointment = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      dispatch(updateAppointmentStatus({ id, status: 'cancelled' }));
    }
  };

  const upcomingAppointments = appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.status !== 'upcoming');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-5 w-5 mr-2" />
          <span>Upcoming: {upcomingAppointments.length}</span>
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center py-12">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No Appointments</h3>
          <p className="text-gray-500">You don't have any appointments scheduled.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {upcomingAppointments.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingAppointments.map(appointment => (
                  <AppointmentCard
                    key={appointment.id}
                    {...appointment}
                    onCancel={() => handleCancelAppointment(appointment.id)}
                  />
                ))}
              </div>
            </section>
          )}

          {pastAppointments.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Appointments</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {pastAppointments.map(appointment => (
                  <AppointmentCard
                    key={appointment.id}
                    {...appointment}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};