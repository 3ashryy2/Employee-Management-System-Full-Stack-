class EmployeeWorkflow:
    stages = [
        'application_received',
        'interview_scheduled',
        'hired',
        'not_accepted',
    ]

    transitions = {
        'application_received': ['interview_scheduled', 'not_accepted'],
        'interview_scheduled': ['hired', 'not_accepted'],
    }

    @staticmethod
    def can_transition(current_stage, next_stage):
        return next_stage in EmployeeWorkflow.transitions.get(current_stage, [])
